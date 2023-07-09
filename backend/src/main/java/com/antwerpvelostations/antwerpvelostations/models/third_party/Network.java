package com.antwerpvelostations.antwerpvelostations.models.third_party;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;
public class Network {
    @JsonProperty("stations")
    private List<ResponseStation> responseStations;
    @JsonIgnore
    @JsonProperty("company")
    private String company;
    @JsonIgnore
    @JsonProperty("href")
    private String href;
    @JsonIgnore
    @JsonProperty("id")
    private String id;
    @JsonIgnore
    @JsonProperty("location")
    private String location;
    @JsonIgnore
    @JsonProperty("name")
    private String name;


    public List<ResponseStation> getStations() {
        return responseStations;
    }

    public void setStations(List<ResponseStation> responseStations) {
        this.responseStations = responseStations;
    }
}

