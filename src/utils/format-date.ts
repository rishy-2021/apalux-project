import { Locale, format, parseISO } from 'date-fns';
import enIn from 'date-fns/locale/en-IN';

type Options = Parameters<typeof format>[2]

export const formatDate = (date: string, dateFormat?: string, options?: Options) => {
  const locale = enIn;
  const dateOptions = {
    ...options,
    locale,
  };
  return format(parseISO(date), dateFormat ?? 'MMM dd, yyyy', dateOptions);
};
