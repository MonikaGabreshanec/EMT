package mk.ukim.finki.emt.web;


import mk.ukim.finki.emt.listeners.NoAccommodationsListener;
import mk.ukim.finki.emt.model.Accommodation;
import mk.ukim.finki.emt.model.Category;
import mk.ukim.finki.emt.model.dto.AccommodationDTO;
import mk.ukim.finki.emt.service.AccommodationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@RequestMapping("/api/accommodations")
public class AccommodationRestController {
    private final AccommodationService accommodationService;
    private final NoAccommodationsListener noEntitiesOfCategoryEventListener;

    public AccommodationRestController(AccommodationService accommodationService, NoAccommodationsListener noEntitiesOfCategoryEventListener) {
        this.accommodationService = accommodationService;
        this.noEntitiesOfCategoryEventListener = noEntitiesOfCategoryEventListener;
    }

    @GetMapping("")
    public List<Accommodation> getAllAccommodations() {
        return accommodationService.listAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Accommodation> getAccommodationById(@PathVariable Long id) {
        return accommodationService.findById(id).map(accommodation -> ResponseEntity.ok().body(accommodation))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/categories")
    public List<Category> getAllCategories() {
        return List.of(Category.values());
    }

    @PostMapping("/add")
    public ResponseEntity<Accommodation> addAccommodation(@RequestBody AccommodationDTO accommodationDTO) {
        return accommodationService.create(accommodationDTO.getName(),
                        Category.valueOf(accommodationDTO.getCategory()),
                        accommodationDTO.getHostId(),
                        accommodationDTO.getNumRooms())
                .map(accommodation -> ResponseEntity.ok().body(accommodation))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        this.accommodationService.deleteById(id);
        if (this.accommodationService.findById(id).isEmpty()) return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/edit/{id}")
    public ResponseEntity<Accommodation> editAccommodation(@PathVariable Long id, @RequestBody AccommodationDTO accommodationDTO) {
        return accommodationService.update(id,
                        accommodationDTO.getName(),
                        Category.valueOf(accommodationDTO.getCategory()),
                        accommodationDTO.getHostId(),
                        accommodationDTO.getNumRooms())
                .map(accommodation -> ResponseEntity.ok().body(accommodation))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }


    @PostMapping("/rent/{id}")
    public ResponseEntity<Void> markAccommodation(@PathVariable Long id) {
        if (id == null) {
            return ResponseEntity.notFound().build();
        }

        if (accommodationService.findById(id) == null) {
            return ResponseEntity.notFound().build();
        }

        this.accommodationService.mark(id);
        return ResponseEntity.ok().build();
    }
}

   /* @GetMapping
    private List<Accommodation> findAll() {
        return this.accommodationService.listAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Accommodation> findById(@PathVariable Long id) {
        return this.accommodationService.findById(id)
                .map(accommodation -> ResponseEntity.ok().body(accommodation))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Accommodation> addAccommodation(@RequestBody AccommodationDTO accommodationDTO)
    {
        return accommodationService.create(accommodationDTO.getName(), Category.valueOf(accommodationDTO.getCategory()),
                        accommodationDTO.getHostId(),
                        accommodationDTO.getNumRooms())
                .map(accommodation -> ResponseEntity.ok().body(accommodation))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Accommodation> create(@PathVariable Long id, @RequestBody AccommodationDTO accommodationDTO) {
        return this.accommodationService.edit(id, accommodationDTO)
                .map(accommodation -> ResponseEntity.ok().body(accommodation))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        this.accommodationService.deleteById(id);
        if (this.accommodationService.findById(id).isEmpty()) return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/mark-accommodation/{id}")
    public ResponseEntity<Void> markAccommodation(@PathVariable Long id) {
        if (id == null) {
            return ResponseEntity.notFound().build();
        }

        if (accommodationService.findById(id) == null) {
            return ResponseEntity.notFound().build();
        }

        this.accommodationService.mark(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/categories")
    public List<Category> getAllCategories(){
        return List.of(Category.values());
    }



} */