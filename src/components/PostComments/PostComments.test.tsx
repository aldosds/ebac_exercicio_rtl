import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<Post/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Verificando a inserção de um comentários', () => {
        render(<PostComment/>)
        fireEvent.change(screen.getByTestId('campo-comment'), {
            target: {
                value: 'Que legal! Gostei'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comment'))
        expect(screen.getByText('Que legal! Gostei')).toBeInTheDocument()
    })
    
    it('Verificando a inserção de mais um comentários', () => {
        render(<PostComment/>)
        fireEvent.change(screen.getByTestId('campo-comment'), {
            target: {
                value: 'Quero o meu kkkk'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comment'))
        expect(screen.getByText('Quero o meu kkkk')).toBeInTheDocument()
    })
});