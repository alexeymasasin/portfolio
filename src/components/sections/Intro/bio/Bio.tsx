import { useTranslation } from 'react-i18next';

export default function Bio() {
	const { t } = useTranslation();

	return <p>{t('BIO_MAIN')}</p>;
}
