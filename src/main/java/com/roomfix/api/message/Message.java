package com.roomfix.api.message;

import javax.persistence.*;

import com.roomfix.api.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="messages")
@Getter 
@Setter
@NoArgsConstructor 
public class Message {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String content;

	@ManyToOne
	private User sender;

	@ManyToOne
	private User receiver;

}
