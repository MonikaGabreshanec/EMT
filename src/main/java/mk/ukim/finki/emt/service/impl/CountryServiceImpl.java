package mk.ukim.finki.emt.service.impl;

import mk.ukim.finki.emt.model.exceptions.*;
import mk.ukim.finki.emt.model.Country;
import mk.ukim.finki.emt.repository.CountryRepository;
import mk.ukim.finki.emt.service.CountryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryServiceImpl implements CountryService {
    private final CountryRepository countryRepository;

    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @Override
    public List<Country> listAll() {
        return countryRepository.findAll();
    }

    @Override
    public Optional<Country> findById(Long id) {
        return Optional.of(countryRepository.findById(id).orElseThrow(CountryNotFoundException::new));
    }

    @Override
    public Optional<Country> create(String name, String continent) {
        return Optional.of(countryRepository.save(new Country(name, continent)));
    }

    @Override
    public Optional<Country> update(Long id, String name, String continent) {
        Country country = findById(id).orElseThrow(CountryNotFoundException::new);
        country.setName(name);
        country.setContinent(continent);
        return Optional.of(countryRepository.save(country));
    }

    @Override
    public Optional<Country> delete(Long id) {
        Country country = findById(id).orElseThrow(CountryNotFoundException::new);
        countryRepository.delete(country);
        return Optional.of(country);
    }
}