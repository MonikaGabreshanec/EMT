package mk.ukim.finki.emt.web;


import mk.ukim.finki.emt.model.Country;
import mk.ukim.finki.emt.model.dto.CountryDTO;
import mk.ukim.finki.emt.service.CountryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@RequestMapping("/api")
public class CountryRestController {
    private final CountryService countryService;

    public CountryRestController(CountryService countryService) {
        this.countryService = countryService;
    }
    @PostMapping("/add-country")
    public ResponseEntity<Void> addCountry(@RequestBody CountryDTO countryDTO) {
        if(countryDTO == null) {
            return ResponseEntity.notFound().build();
        }

        this.countryService.create(countryDTO.getName(), countryDTO.getContinent());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/countries")
    public List<Country> getCountries() {
        return this.countryService.listAll();
    }
}
