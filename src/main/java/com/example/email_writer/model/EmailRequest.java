package com.example.email_writer.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data     // helps to generate getters,setters and constructor

public class EmailRequest {

    private String emailContent;
    private String tone;
}
