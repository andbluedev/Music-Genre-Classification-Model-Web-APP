import React, { useState } from 'react';

import { post } from 'axios';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export const UploadAudioAndPredict = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [audioLink, setAudioLink] = useState(null);
  const [predictedGenre, setPredictedGenre] = useState('');

  const submit = () => {
    const data = new FormData();
    data.append('audio_file', selectedFile);
    let url = process.env.REACT_APP_API_URI + '/predict';
    setLoading(true);
    post(url, data, {})
      .then((res) => {
        setPredictedGenre(res.data.predicted);
      })
      .catch((err) => console.warn(err))
      .finally(() => setLoading(false));
  };

  const handleInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
    const url = URL.createObjectURL(e.target.files[0]);
    setAudioLink(url);
  };

  return (
    <div>
      <div className='form-row'>
        <div className='form-group'>
          <input
            type='file'
            className='form-control'
            name='audio_file'
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className='form-row'>
        {selectedFile && <AudioPlayer autoPlay={false} src={audioLink} />}
      </div>

      <div className='form-row'>
        <button type='submit' className='btn btn-dark' onClick={() => submit()}>
          {loading ? (
            <span>
              <span
                class='spinner-border spinner-border-sm'
                role='status'
                aria-hidden='true'
              ></span>
              Loading
            </span>
          ) : (
            'Predict Genre'
          )}
        </button>
        {predictedGenre && (
          <h2 style={{ color: 'red' }}>Predicted Genre: {predictedGenre}!</h2>
        )}
      </div>
    </div>
  );
};
