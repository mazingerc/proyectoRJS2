import { useState } from "react";
import { db } from "../../main";
import { collection, addDoc } from "firebase/firestore";
import { Button, Modal, TextField, Typography } from "@mui/material";
import { useCartContext } from "../context/CartContext";
import "./Checkout.css";


const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const { cart, clearCart } = useCartContext();

  const manejadorForm = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConf) {
      setError("Debe completar todos los datos para continuar su compra");
      return;
    }

    if (email !== emailConf) {
      setError("Los campos de email no coinciden, por favor verifique");
      return;
    }

    const orden = {
      items: cart.items.map((product) => ({
        id: product.id,
        nombre: product.title,
        cantidad: product.quantity,
        numeroPedido: generateOrderNumber(),
      })),
      total: cart.items.reduce((total, product) => total + product.price * product.quantity, 0),
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        clearCart();
      })
      .catch((error) => {
        console.log("Error al crear la orden", error);
        setError("Se produjo un error al crear la orden");
      });
  };

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", marginTop:140 }}>
      <Typography variant="h2">Finaliza pedido</Typography>
      <form onSubmit={manejadorForm}>
        {cart.items.map((product) => (
          <div key={product.id}>
            <Typography>
              {product.title} x {product.quantity}
            </Typography>
            <Typography> $ {product.price} </Typography>
            <hr />
          </div>
        ))}
        <Typography variant="strong">
          Cantidad Total: {cart.items.reduce((total, product) => total + product.quantity, 0)}
        </Typography>
        <hr />

        <div className="form-group">
          <Typography htmlFor="nombre">Nombre</Typography>
          <TextField
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="wide-input"
          />
        </div>

        <div className="form-group">
          <Typography htmlFor="apellido">Apellido</Typography>
          <TextField
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className="wide-input"
          />
        </div>

        <div className="form-group">
          <Typography htmlFor="telefono">Teléfono</Typography>
          <TextField
            type="text"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="wide-input"
          />
        </div>

        <div className="form-group">
          <Typography htmlFor="email">Email</Typography>
          <TextField
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="wide-input"
          />
        </div>

        <div className="form-group">
          <Typography htmlFor="emailConf">Confirmación de Email</Typography>
          <TextField
            type="email"
            id="emailConf"
            value={emailConf}
            onChange={(e) => setEmailConf(e.target.value)}
            className="wide-input"
          />
        </div>

        {error && <Typography style={{ color: "#c11077" }}>{error}</Typography>}

        <Button
          className="miBtn"
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleShowModal}
          disabled={cart.items.length === 0}
        >
          Finalizar Compra
        </Button>
      </form>

      <Modal open={showModal} onClose={handleCloseModal}>
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    padding: 20,
    margin: '0 auto', 
    marginTop: '30vh', 
    backgroundColor: '#ffffff',
  }}>
    <Typography variant="h6">Gracias por tu compra!</Typography>
    <Typography>Tu número de pedido es: {ordenId}</Typography>
    <Button variant="contained" color="primary" onClick={handleCloseModal}>
      Cerrar
    </Button>
  </div>
</Modal>
    </div>
  );
};

export default Checkout;
