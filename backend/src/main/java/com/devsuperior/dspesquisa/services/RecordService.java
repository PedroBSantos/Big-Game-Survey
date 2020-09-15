package com.devsuperior.dspesquisa.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import com.devsuperior.dspesquisa.dto.RecordDTO;
import com.devsuperior.dspesquisa.dto.RecordInsertDTO;
import com.devsuperior.dspesquisa.entities.Game;
import com.devsuperior.dspesquisa.entities.Record;
import com.devsuperior.dspesquisa.repository.GameRepository;
import com.devsuperior.dspesquisa.repository.RecordRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RecordService {

    @Autowired
    private RecordRepository recordRepository;
    @Autowired
    private GameRepository gameRepository;

    @Transactional
    public RecordDTO insert(RecordInsertDTO recordInsertDTO) {
        Record record = new Record();
        record.setAge(recordInsertDTO.getAge());
        record.setName(recordInsertDTO.getName());
        record.setMoment(Instant.now());

        Game game = this.gameRepository.getOne(recordInsertDTO.getGameId()); // Não pega instância a partir do banco de
                                                                             // dados

        record.setGame(game);

        record = this.recordRepository.save(record);

        RecordDTO recordDTO = new RecordDTO(record);
        return recordDTO;
    }

    @Transactional(readOnly = true)
    public Page<RecordDTO> findByMoments(Instant minDate, Instant maxDate, PageRequest pageRequest) {
        return this.recordRepository.findByMoments(minDate, maxDate, pageRequest).map(record -> new RecordDTO(record));
    }
}
