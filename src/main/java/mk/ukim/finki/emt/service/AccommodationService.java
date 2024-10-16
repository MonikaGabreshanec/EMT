package mk.ukim.finki.emt.service;



import mk.ukim.finki.emt.model.Accommodation;
import mk.ukim.finki.emt.model.Category;

import java.util.List;
import java.util.Optional;

public interface AccommodationService {
    List<Accommodation> listAll();
    Optional<Accommodation> findById(Long id);
    Optional<Accommodation> create(String name, Category category, Long hostId, Integer numRooms);

    Optional<Accommodation> update(Long id, String name, Category category, Long hostId, Integer numRooms);

    void deleteById(Long id);
    void mark(Long id);

}
