import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('lib/pages/home/index.tsx'),
  route('about', 'lib/pages/about/index.tsx'),
  route('new-players', 'lib/pages/new-players/index.tsx'),
  route('resources', 'lib/pages/resources/index.tsx'),
  route('*', 'lib/pages/404.tsx'),
] satisfies RouteConfig;
