package com.antwerpvelostations.antwerpvelostations.models.third_party;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Extra {
    @JsonProperty("address")
    private String address;

    @JsonProperty("status")
    private String status;

    @JsonProperty("uid")
    private int uid;

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
}
