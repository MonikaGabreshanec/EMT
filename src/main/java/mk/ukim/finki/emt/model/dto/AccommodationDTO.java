package mk.ukim.finki.emt.model.dto;

import lombok.Data;

@Data
public class AccommodationDTO {
    String name;
    String category;
    Integer numRooms;
    Long hostId;

    public AccommodationDTO() {
    }

    public AccommodationDTO(String name, String category, Integer numRooms, Long hostId) {
        this.name = name;
        this.category = category;
        this.numRooms = numRooms;
        this.hostId = hostId;
    }
}
