package com.devsuperior.dspesquisa.services;

import java.util.List;
import java.util.stream.Collectors;

import com.devsuperior.dspesquisa.repository.GameRepository;
import com.devsuperior.dspesquisa.dto.GameDTO;
import com.devsuperior.dspesquisa.entities.Game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GameService {

    @Autowired
    private GameRepository gameRepository;

    @Transactional(readOnly = true)
    public List<GameDTO> findAll() {
        List<Game> games = this.gameRepository.findAll();
        return games.stream().map(game -> new GameDTO(game)).collect(Collectors.toList());
    }
}
