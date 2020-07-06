package com.catalogue.produit.repository;

import com.catalogue.produit.model.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface ProduitRepository  extends JpaRepository<Produit, Long> {
}
