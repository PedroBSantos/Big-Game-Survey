package com.devsuperior.dspesquisa.repository;

import com.devsuperior.dspesquisa.entities.Genre;

import org.springframework.data.jpa.repository.JpaRepository;

public interface GenreRepository extends JpaRepository<Genre, Long> {

}
