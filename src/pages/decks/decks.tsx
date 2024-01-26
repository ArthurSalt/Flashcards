import { TextField } from "@/components/ui"
import { useCreateDeckMutation, useGetDecksQuery } from "@/services/decks"
import { decksSlice, selectDecksSlice } from "@/services/decks/decks.slice"
import { useAppSelector } from "@/services/store"
import { useDispatch } from "react-redux"

export const Decks = () => {
  // To fetch on button click:
  // const [getDecks, { isLoading, data }] = useLazyGetDecksQuery(); getDecks is a func to fetch the data
  // or use {skip: true} as an option for useGetDecksQuery(params, options)
  const dispatch = useDispatch()

  const { itemsPerPage, currentPage, searchByName, newDeckName } = useAppSelector(selectDecksSlice)

  const setItemsPerPage = (itemsPerPage: number) => dispatch(decksSlice.actions.setItemsPerPage(itemsPerPage))
  const setNewDeckName = (newDeckName: string) => dispatch(decksSlice.actions.setNewDeckName(newDeckName))

  const { isLoading, data } = useGetDecksQuery({
    itemsPerPage,
    currentPage,
    name: searchByName,
  })

  const [createDeck, { isLoading: isCreateDeckLoading }] = useCreateDeckMutation()

  const handleCreateClicked = () => createDeck({ name: newDeckName })
  if (isLoading || isCreateDeckLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <select onChange={(e) => dispatch(setItemsPerPage(+e.target.value))} name="items" id="1" style={{ color: 'black' }}>
        <option defaultValue={'Items Per Page'} disabled>Items Per Page</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cards</th>
            <th>Last Updated</th>
            <th>Created By</th>
          </tr>
        </thead>
        <tbody>
          {data && data.items.map((deck) => {
            return (
              <tr key={deck.id}>
                <td>{deck.name}</td>
                <td>{deck.id}</td>
                <td>{new Date(deck.updated).toLocaleString('ru-RU')}</td>
                <td>{deck.author.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <TextField onChange={(e) => dispatch(setNewDeckName(e.currentTarget.value))} value={newDeckName} variant={"primary"} label="Create Card" placeholder="Cards Name"></TextField>
      <button onClick={handleCreateClicked}>Create Card</button>
    </div >
  )
}
