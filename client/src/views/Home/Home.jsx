import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../../redux/actions';
import SearchBar from '../../components/SearchBar/SearchBar';
import CarsContainer from '../../components/CardsContainer/CardsContainer';
import NavBar from '../../components/NaBar/NavBar';
import Pagination from '../../components/Pagination/Pagination';
import style from './Home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8;

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const dogs = useSelector((state) => state.dogs);

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = dogs?.slice(indexOfFirstDog, indexOfLastDog);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterByTemperament = (temperament) => {
    // Lógica para filtrar por temperamento
  };

  const handleFilterByOrigin = (origin) => {
    // Lógica para filtrar por origen (API o base de datos)
  };

  const handleSortAlphabetically = () => {
    // Lógica para ordenar alfabéticamente
  };

  const handleSortByWeight = () => {
    // Lógica para ordenar por peso
  };

  return (
    <div className={style.homeContainer}>
      <NavBar/>

      <h1 className={style.homeTitle}>HOME PAGE</h1>
      <div className={style.filters}>
        <SearchBar className={style.searchBar} />
        <button onClick={() => handleFilterByTemperament('Active')} className={style.filterButton}>
          Filtrar por Temperamento Activo
        </button>
        <button onClick={() => handleFilterByOrigin('API')} className={style.filterButton}>
          Filtrar por Origen API
        </button>
        <button onClick={() => handleFilterByOrigin('Database')} className={style.filterButton}>
          Filtrar por Origen Base de Datos
        </button>
        <button onClick={handleSortAlphabetically} className={style.sortButton}>
          Ordenar Alfabéticamente
        </button>
        <button onClick={handleSortByWeight} className={style.sortButton}>
          Ordenar por Peso
        </button>
      </div>
      <CarsContainer dogs={currentDogs} />
      <Pagination
        totalDogs={dogs.length}
        dogsPerPage={dogsPerPage}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default Home;
