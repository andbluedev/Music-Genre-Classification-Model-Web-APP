package com.roomfix.api.message;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface MessageRepository extends CrudRepository<Message, Long>{
	List<Message> findAll(); 
}
