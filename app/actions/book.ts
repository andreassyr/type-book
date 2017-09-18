import { actionCreator } from './helpers';

export const loadBookSuccess = actionCreator('LOAD_BOOK_SUCCESS');
export const loadBookError  = actionCreator('LOAD_BOOK_ERROR');

export const loadSoundsSuccess= actionCreator('LOAD_SOUNDS_SUCCESS');
export const loadSoundsError= actionCreator('LOAD_SOUNDS_ERROR');

export const loadImagesSuccess = actionCreator('LOAD_IMAGES_SUCCESS');
export const loadImagesError = actionCreator('LOAD_IMAGES_ERROR');


export function loadBook() {

  var fs = require('fs');
  const remote = require('electron').remote;
  const filePath = process.env.NODE_ENV === 'production' ? remote.app.getAppPath() : './resources/book.json';

  console.log(__dirname);
  return (dispatch: Function, getState: Function) => {
    fs.readFile(filePath, 'utf-8', function(err: any, data: any) {
      if (err)
        dispatch(loadBookError(err));
      else
        dispatch(loadBookSuccess(data));
    });
  };

}
