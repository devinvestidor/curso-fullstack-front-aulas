import { NbMenuItem } from '@nebular/theme';
import { TaskFilter, TaskFilterEnum } from 'app/models/task';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/default',
    home: true,
  },
  {
    title: 'CADASTROS',
    group: true,
  },
  {
    title: 'Usuários',
    icon: 'person-outline',
    link: '/pages/user',
  },
  {
    title: 'Tarefas',
    icon: 'checkmark-square-outline',
    children: [
      new TaskFilter('Minhas', TaskFilterEnum.MY),
      new TaskFilter('Em aberto', TaskFilterEnum.OPENED),
      new TaskFilter('Finalizadas', TaskFilterEnum.FINISHED),
      new TaskFilter('Todas', TaskFilterEnum.ALL),
    ],
  },

];
