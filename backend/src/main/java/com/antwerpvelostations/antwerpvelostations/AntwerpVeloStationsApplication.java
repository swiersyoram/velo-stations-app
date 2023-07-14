package com.antwerpvelostations.antwerpvelostations;

import com.antwerpvelostations.antwerpvelostations.dao.StationDao;
import com.antwerpvelostations.antwerpvelostations.service.AuthenticationService;
import com.antwerpvelostations.antwerpvelostations.service.SyncService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.util.Date;

@SpringBootApplication
@EnableScheduling
public class AntwerpVeloStationsApplication {

	public static void main(String[] args) {
		SpringApplication.run(AntwerpVeloStationsApplication.class, args);
	}
	@Bean
	public CommandLineRunner run(SyncService syncService) throws Exception {
		return args -> syncService.fetchDataFromAPI();
	}

//	public void addStation(StationDao stationDao){
////		Station station = new Station(1, 1,null, null, 1, 1, 1, 1, "001- Centraal Station - Astrid", new Date() );
////		stationDao.insertStation(station);
//	}

}
