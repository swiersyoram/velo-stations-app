package com.antwerpvelostations.antwerpvelostations.dao;

import com.antwerpvelostations.antwerpvelostations.models.database.Station;

import java.util.List;

public interface StationDao {
    public Station addStation(Station station);

    public List<Station> findAllStations();

}
