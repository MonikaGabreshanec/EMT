package mk.ukim.finki.emt.web;


import mk.ukim.finki.emt.model.Host;
import mk.ukim.finki.emt.model.dto.HostDTO;
import mk.ukim.finki.emt.service.CountryService;
import mk.ukim.finki.emt.service.HostService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@RequestMapping("/api")
public class HostRestController {
    private final HostService hostService;
    private final CountryService countryService;

    public HostRestController(HostService hostService, CountryService countryService) {
        this.hostService = hostService;
        this.countryService = countryService;
    }

    @PostMapping("/add-host")
    public ResponseEntity<Void> addHost(@RequestBody HostDTO hostDTO) {
        if(hostDTO == null) {
            return ResponseEntity.notFound().build();
        }

        if(countryService.findById(hostDTO.getCountryId()).isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        this.hostService.create(hostDTO.getName(), hostDTO.getSurname(), hostDTO.getCountryId());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/hosts")
    public List<Host> getHosts() {
        return this.hostService.listAll();
    }

    @PostMapping("/delete-host/{id}")
    public ResponseEntity<Void> getHosts(@PathVariable Long id) {
        if(id == null) {
            return ResponseEntity.notFound().build();
        }

        this.hostService.delete(id);
        return ResponseEntity.ok().build();
    }

}
