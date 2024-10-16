package mk.ukim.finki.emt.repository;


import mk.ukim.finki.emt.model.Accommodation;
import mk.ukim.finki.emt.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccommodationRepository extends JpaRepository<Accommodation,Long> {

}
