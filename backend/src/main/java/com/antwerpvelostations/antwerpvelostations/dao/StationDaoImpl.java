package com.antwerpvelostations.antwerpvelostations.dao;

import com.antwerpvelostations.antwerpvelostations.models.database.Station;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class StationDaoImpl implements StationDao {
    private EntityManager entityManager;

    @Autowired
    public StationDaoImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public Station addStation(Station station) {
        entityManager.merge(station);
        return station;
    }

    @Override
    public List<Station> findAllStations() {
        TypedQuery<Station> query = entityManager.createQuery("from Station", Station.class);
        return query.getResultList();
    }
}
