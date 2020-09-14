package com.devsuperior.dspesquisa.repository;

import com.devsuperior.dspesquisa.entities.Record;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RecordRepository extends JpaRepository<Record, Long> {

}
