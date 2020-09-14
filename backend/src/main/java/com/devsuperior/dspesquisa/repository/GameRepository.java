package com.devsuperior.dspesquisa.repository;

import com.devsuperior.dspesquisa.entities.Game;

import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long> {

}
