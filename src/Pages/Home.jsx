import React from "react";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./Search";
const Home = ({ judul }) => {
  return (
    <Container className="py-5">
      <motion.div
        className="bg-light rounded shadow p-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="display-4 fw-bold text-primary mb-4 text-center">
          {judul}
        </h1>

        <p className="text-muted fs-5 mb-3">
          🌟 Explore a world of delicious and easy-to-make recipes right at your fingertips.
          Whether you're craving traditional comfort food or looking for something new to try — we’ve got you covered!
        </p>

        <p className="text-muted fs-5 mb-3">
          🍴 Browse curated dishes, search by ingredients, and save your favorites to cook later.
          Cooking has never been this fun and simple!
        </p>

        <p className="text-muted fs-5 mb-4">
          🚀 Start your cooking journey with us — and make every meal memorable. Happy cooking!
        </p>

        <div className="text-center">
          <Link to="/Search" className="btn btn-primary btn-lg">
            Cari Resep Sekarang
          </Link>
        </div>
      </motion.div>
    </Container>
  );
};

export default Home;
