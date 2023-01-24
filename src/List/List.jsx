import { useTranslation } from 'react-i18next';

function List() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('yes')}</h1>
      <h1>{t('do')}</h1>
      <button onClick={() => changeLanguage('zh-tw')}>中文</button>
      <button onClick={() => changeLanguage('en')}>English</button>
    </div>
  );
}

export default List;
