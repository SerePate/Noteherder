import React from 'react'
import './Main.css'
import Sidebar from './Sidebar'
import NoteForm from './NoteForm'
import NoteList from './NoteList'

const Main = () => {
    return(
      <div className="Main">
        <nav className="Sidebar">
          <div className="logo">
            <img src="media/quill.svg" alt="Noteherder">
          </div>
          <a className="new-note" href="/notes">
            <img src="media/new-hover.png" alt="New note">
            <img className="outline" src="media/new.png" alt="New note">
          </a>
          <div className="SignOut">
            <button>
              <i className="fa fa-sign-out"></i>
            </button>
          </div>
        </nav>
        <div className="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            <a className="active">
              <li>
                <div className="note">
                  <div className="note-title">
                    Kohlrabi welsh
                  </div>
                  <div className="note-body">
                    <p>
                      Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                    </p>
                  </div>
                </div>
              </li>
            </a>
            <a>
              <li>
                <div className="note">
                  <div className="note-title">
                    Dandelion cucumber
                  </div>
                  <div className="note-body">
                    <p>
                      Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
                    </p>
                  </div>
                </div>
              </li>
            </a>
            <a>
              <li>
                <div className="note">
                  <div className="note-title">
                    Prairie turnip
                  </div>
                  <div className="note-body">
                    <p>
                      Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                    </p>
                  </div>
                </div>
              </li>
            </a>
          </ul>
        </div>
          <NoteForm />
        </div>
      </div>
    )
}

export default Main