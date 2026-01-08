import * as React from 'react';

declare namespace IconsBuzzer {
  export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
    className?: string;
  }
}

declare const Home: React.FC<IconsBuzzer.IconProps>;
declare const User: React.FC<IconsBuzzer.IconProps>;
declare const Settings: React.FC<IconsBuzzer.IconProps>;
declare const Search: React.FC<IconsBuzzer.IconProps>;

export { Home, User, Settings, Search };