package mk.ukim.finki.emt.service;



import mk.ukim.finki.emt.model.Country;

import java.util.List;
import java.util.Optional;

public interface CountryService {
    List<Country> listAll();
    Optional<Country> findById(Long id);
    Optional<Country> create(String name, String continent);
    Optional<Country> update(Long id, String name, String continent);
    Optional<Country> delete(Long id);
}