package com.catalogue.produit;

import com.catalogue.produit.model.Produit;
import com.catalogue.produit.repository.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@SpringBootApplication
public class ProduitApplication implements CommandLineRunner {

	@Autowired
	private ProduitRepository produitRepository;

	public static void main(String[] args) {
		SpringApplication.run(ProduitApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Random random = new Random();

		List<String> Products = new ArrayList<>();
		Products.add("Volvo");
		Products.add("BMW");
		Products.add("Ford");
		Products.add("Mazda");
		Products.add("Peugeot");
		Products.add("Renault");
		Products.add("Opel");
		Products.add("Citroën");
		Products.add("Volkswagen");

		Products.forEach(
				Product->produitRepository.save(
						new Produit(
								null,
								Product,
								10000 + (250000 - 10000) * random.nextDouble(),
								random.nextInt(100)))
		);




	}
}
