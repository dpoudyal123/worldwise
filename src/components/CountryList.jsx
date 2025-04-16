import Spinner from './Spinner';
import CountryItem from './CountryItem';
import Message from './Message';
import styles from './CountryList.module.css';

function CountryList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }
  if (!cities.length) {
    return <Message message="Add your first country by clicking on the Map" />;
  }
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [
        ...arr,
        { country: city.country, emoji: city.emoji, id: city.id },
      ];
    } else {
      return arr;
    }
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => {
        return <CountryItem key={country.id} country={country} />;
      })}
    </ul>
  );
}
export default CountryList;
