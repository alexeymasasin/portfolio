import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useDocumentTitle = (pageTitle: string) => {
	const { t } = useTranslation();
	return useEffect(() => {
		document.title = t(pageTitle) + ' · ' + t('ALEXEY_MASASIN');
	});
};

export default useDocumentTitle;
