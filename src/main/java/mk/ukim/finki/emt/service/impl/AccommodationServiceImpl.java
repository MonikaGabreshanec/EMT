package mk.ukim.finki.emt.service.impl;


import mk.ukim.finki.emt.model.Accommodation;
import mk.ukim.finki.emt.model.Category;
import mk.ukim.finki.emt.repository.AccommodationRepository;
import mk.ukim.finki.emt.service.AccommodationService;
import mk.ukim.finki.emt.service.HostService;
import org.springframework.stereotype.Service;
import mk.ukim.finki.emt.model.exceptions.*;
import java.util.List;
import java.util.Optional;

@Service
public class AccommodationServiceImpl implements AccommodationService {
    private final AccommodationRepository accommodationRepository;

    private final HostService hostService;

    public AccommodationServiceImpl(AccommodationRepository accommodationRepository, HostService hostService) {
        this.accommodationRepository = accommodationRepository;
        this.hostService = hostService;
    }

    @Override
    public List<Accommodation> listAll() {
        return this.accommodationRepository.findAll();
    }

    @Override
    public Optional<Accommodation> findById(Long id) {
        return this.accommodationRepository.findById(id);
    }

    @Override
    public Optional<Accommodation> create(String name, Category category, Long hostId, Integer numRooms) {
        return Optional.of(accommodationRepository.save(new Accommodation(name,
                category,
                hostService.findById(hostId).orElseThrow(HostNotFoundException::new),
                numRooms)));
    }

    @Override
    public Optional<Accommodation> update(Long id, String name, Category category, Long hostId, Integer numRooms) {
        Accommodation accommodation = findById(id).orElseThrow(HostNotFoundException::new);
        accommodation.setName(name);
        accommodation.setCategory(category);
        accommodation.setHost(hostService.findById(hostId).orElseThrow(HostNotFoundException::new));
        accommodation.setNumRooms(numRooms);
        return Optional.of(accommodationRepository.save(accommodation));
    }


    @Override
    public void deleteById(Long id) {
        this.accommodationRepository.deleteById(id);
    }

    @Override
    public void mark(Long id) {
        Accommodation accommodation=this.findById(id).orElseThrow(AccommodationNotFoundException::new);
        accommodation.setNumRooms(0);
        accommodationRepository.save(accommodation);
    }

}
