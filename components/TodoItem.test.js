
import { render, screen } from '@testing-library/react'
import TodoItem from './TodoItem'
import TodoList from './TodoList'

test('TODO の文字が表示される', () => {
  const todo = { id: '1', text: '牛乳を買う', done: false }
  render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />)
  expect(screen.getByText('牛乳を買う')).toBeInTheDocument()
})

test('TODO の数だけ項目が表示される', () => {
  const todos = [
    { id: '1', text: '牛乳を買う', done: false },
    { id: '2', text: 'レポート提出', done: true },
  ]
  render(<TodoList todos={todos} onToggle={() => {}} onDelete={() => {}} />)
  const items = screen.getAllByRole('listitem')
  // screen.debug() // 画面の HTML を出力する
  expect(items).toHaveLength(2)
  expect(items[0]).toHaveTextContent('牛乳を買う')
  expect(items[1]).toHaveTextContent('レポート提出')
})

test('削除ボタンに TODO 名入りのラベルが付いている', () => {
  const todo = { id: '1', text: '牛乳を買う', done: false }
  render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />)
  expect(screen.getByRole('button', { name: '牛乳を買うを削除' })).toBeInTheDocument()
})
