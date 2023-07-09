package com.antwerpvelostations.antwerpvelostations.models.third_party;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;

public class ResponseStation {
    @JsonProperty("empty_slots")
    private int emptySlots;
    @JsonProperty("extra")
    private Extra extra;
    @JsonProperty("free_bikes")
    private int freeBikes;
    @JsonProperty("id")
    private String id;
    @JsonProperty("latitude")
    private double latitude;

    @JsonProperty("longitude")
    private double longitude;
    @JsonProperty("name")
    private String name;
    @JsonProperty("timestamp")
    private Date timestamp;

    public int getEmptySlots() {
        return emptySlots;
    }

    public void setEmptySlots(int emptySlots) {
        this.emptySlots = emptySlots;
    }

    public Extra getExtra() {
        return extra;
    }

    public void setExtra(Extra extra) {
        this.extra = extra;
    }

    public int getFreeBikes() {
        return freeBikes;
    }

    public void setFreeBikes(int freeBikes) {
        this.freeBikes = freeBikes;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }
}
