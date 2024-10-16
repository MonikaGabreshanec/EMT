package mk.ukim.finki.emt.service.impl;


import mk.ukim.finki.emt.model.Host;
import mk.ukim.finki.emt.repository.HostRepository;
import mk.ukim.finki.emt.service.CountryService;
import mk.ukim.finki.emt.service.HostService;
import org.springframework.stereotype.Service;
import mk.ukim.finki.emt.model.exceptions.*;
import java.util.List;
import java.util.Optional;

@Service
public class HostServiceImpl implements HostService {
    private final HostRepository hostRepository;
    private final CountryService countryService;
    public HostServiceImpl(HostRepository hostRepository, CountryService countryService) {
        this.hostRepository = hostRepository;
        this.countryService = countryService;
    }

    @Override
    public List<Host> listAll() {
        return hostRepository.findAll();
    }

    @Override
    public Optional<Host> findById(Long id) {
        return Optional.of(hostRepository.findById(id).orElseThrow(HostNotFoundException::new));
    }

    @Override
    public Optional<Host> create(String name, String surname, Long countryId) {

        return Optional.of(hostRepository.save(new Host(name, surname, countryService.findById(countryId).orElseThrow(CountryNotFoundException::new))));
    }

    @Override
    public Optional<Host> update(Long id, String name, String surname, Long countryId) {
        Host host = findById(id).orElseThrow(HostNotFoundException::new);
        host.setName(name);
        host.setSurname(surname);
        host.setCountry(countryService.findById(countryId).orElseThrow(CountryNotFoundException::new));
        return Optional.of(hostRepository.save(host));
    }

    @Override
    public Optional<Host> delete(Long id) {
        Host host = findById(id).orElseThrow(HostNotFoundException::new);
        hostRepository.deleteById(id);
        return Optional.of(host);
    }
}