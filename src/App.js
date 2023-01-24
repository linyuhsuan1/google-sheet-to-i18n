import List from './List/List';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <>
      <List />
      <h1>{t('do')}</h1>
    </>
  );
}

export default App;
