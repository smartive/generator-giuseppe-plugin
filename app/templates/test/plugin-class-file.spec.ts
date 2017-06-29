import { Giuseppe } from 'giuseppe';

import { <%= namePascal %> } from '../src';

describe('<%= namePascal %>', () => {

    it('should return the constructor name', () => {
        const plugin = new <%= namePascal %>();

        expect(plugin.name).toBe('<%= namePascal %>');
    });

    it('should register itself in giuseppe', () => {
        const plugin = new <%= namePascal %>();
        const giuseppe = new Giuseppe();

        giuseppe.registerPlugin(plugin);

        expect((giuseppe as any).plugins.some(p => p.name === '<%= namePascal %>')).toBeTruthy();
    });

});
