package com.antwerpvelostations.antwerpvelostations.models.database;

import com.antwerpvelostations.antwerpvelostations.models.third_party.Extra;
import com.antwerpvelostations.antwerpvelostations.models.third_party.ResponseStation;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.Instant;

@Entity
@Table(name = "stations")
public class Station {
    @Id
    @Column(name = "id")
    private String id;
    @Column(name = "empty_slots")
    @JsonProperty("empty_slots")
    private int emptySlots;
    @Column(name = "address")
    private String address;

    @Column(name = "status")
    private String status;

    @Column(name = "uid")
    private int uid;
    @Column(name = "free_bikes")
    @JsonProperty("free_bikes")
    private int freeBikes;
    @Column(name = "latitude")
    private double latitude;
    @Column(name = "longitude")
    private double longitude;
    @Column(name = "name")
    private String name;
    @Column(name = "timestamp")
    private Instant timestamp;

    public Station(String id, int emptySlots, String address, String status, int uid, int freeBikes, double latitude, double longitude, String name, Instant timestamp) {
        this.id = id;
        this.emptySlots = emptySlots;
        this.address = address;
        this.status = status;
        this.uid = uid;
        this.freeBikes = freeBikes;
        this.latitude = latitude;
        this.longitude = longitude;
        this.name = name;
        this.timestamp = timestamp;
    }

    public Station(ResponseStation station){
        Extra extra = station.getExtra();
        this.id = station.getId();
        this.emptySlots = station.getEmptySlots();
        this.address = extra.getAddress();
        this.status = extra.getStatus();
        this.uid = extra.getUid();
        this.freeBikes = station.getFreeBikes();
        this.latitude = station.getLatitude();
        this.longitude = station.getLongitude();
        this.name = station.getName();
        this.timestamp = station.getTimestamp().toInstant();
    }

    public Station() {

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getEmptySlots() {
        return emptySlots;
    }

    public void setEmptySlots(int emptySlots) {
        this.emptySlots = emptySlots;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public int getFreeBikes() {
        return freeBikes;
    }

    public void setFreeBikes(int freeBikes) {
        this.freeBikes = freeBikes;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Instant getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Instant timestamp) {
        this.timestamp = timestamp;
    }
}
