import moment from 'moment'

import 'moment/locale/pt-br'

moment.locale('pt-br')

export function formattedDate(date: string) {
  return moment(date).fromNow()
}
