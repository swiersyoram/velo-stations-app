package com.antwerpvelostations.antwerpvelostations.service;

import com.antwerpvelostations.antwerpvelostations.dao.StationDao;
import com.antwerpvelostations.antwerpvelostations.models.database.Station;
import com.antwerpvelostations.antwerpvelostations.models.third_party.ApiResponse;
import com.antwerpvelostations.antwerpvelostations.models.third_party.ResponseStation;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class SyncService {

    private RestTemplate restTemplate;
    private StationDao stationDao;

    @Value("${citybikes.url}")
    private String url;

    @Autowired
    public SyncService(RestTemplateBuilder restTemplateBuilder, StationDao stationDao) {
        this.restTemplate = restTemplateBuilder.build();
        this.stationDao = stationDao;
    }

    @Scheduled(fixedRate = 60000)
    public void fetchDataFromAPI() throws JsonProcessingException {
        System.out.println("Sync database");
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        if (response.getStatusCode().is2xxSuccessful()) {
            String json = response.getBody();
            ObjectMapper objectMapper = new ObjectMapper();
            ApiResponse apiResponse = objectMapper.readValue(json, ApiResponse.class);

            List<ResponseStation> responseStations = apiResponse.getNetwork().getStations();

            for (ResponseStation responseStation : responseStations){
                Station station = new Station(responseStation);
                stationDao.addStation(station);
            }
        } else {
            throw new RuntimeException("Failed to fetch data from API: " + response.getStatusCode());
        }
    }

}
