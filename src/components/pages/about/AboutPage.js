import React from 'react';

import { Link } from 'react-router-dom';

import { Title, SubTitle } from '../../common/text/Basics';
import FeatureExtractionImage from '../../../img/FeatureExtractionCSV_V2.jpg';
import OverallWorkflowImage from '../../../img/OverallWorkflow.jpg';
import MusicIllustrationImage from '../../../img/MusicImage.jpeg';

export function AboutPage() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <Title>About this Project</Title>
        </div>
        <div className='row'>
          <div className='col'>
            <span>
              A project by{' '}
              <a href='https://www.linkedin.com/in/andrew-pouret'> Andrew POURET </a>{' '}
              and
              <a href='https://www.linkedin.com/in/matthieu-jacquand-0b0ba6181/'>
                {' '}
                Matthieu JACQUAND.
              </a>{' '}
              Classify's project source code and associated jupyter notebooks can be
              found <Link to='/links'> here. </Link>
            </span>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <SubTitle>Context</SubTitle>
            <p>
              For many of us, music plays a role in our daily lives. We listen to
              music while working, taking part in hobbies, during our commutes or
              just for the sake of it. We develop a taste for specific music, become
              attached to certain artists, albums and genres.
            </p>
            <p>
              This is why we decided to conduct our project on music, in order to see
              how data, data analysis and prediction techniques can be used in
              this field. It is also fascinating to wonder how music, which in
              essence is sound, can be numerized, quantified, and thus analyzed.
            </p>
            <p>
              In this project, we will be turning towards a concept of music that
              applies to every piece ever produced: genre. We will be using data and
              techniques tailored towards the prediction of which genre a piece of
              sample audio belongs to, studying which machine learning models are
              most appropriate and pinpointing which boundaries we run into.
            </p>
            <img
              src={MusicIllustrationImage}
              class='img-fluid'
              alt='overall_workflow'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <SubTitle>Dataset</SubTitle>
            <p>
              The dataset we've chosen is from Kaggle, "a subsidiary of Google LLC,
              is an online community of data scientists and machine learning
              practitioners. Kaggle allows users to find and publish data sets,
              explore and build models in a web-based data-science environment, work
              with other data scientists and machine learning engineers, and enter
              competitions to solve data science challenges."{' '}
              <a href='https://en.wikipedia.org/wiki/Kaggle'>
                (https://en.wikipedia.org/wiki/Kaggle)
              </a>
            </p>
            <p>
              The dataset can be found here:{' '}
              <a href='https://www.kaggle.com/carlthome/gtzan-genre-collection'>
                https://www.kaggle.com/carlthome/gtzan-genre-collection
              </a>
            </p>
            <p>
              It is made of 1000 audio samples, each 30 seconds long. It is divided
              in 10 sections, each consisting of 100 samples from a specific genre:
            </p>
            <ul>
              <li>Blues</li>
              <li>Classical</li>
              <li>Country </li>
              <li>Disco</li>
              <li>Hip-Hop</li>
              <li>Jazz</li>
              <li>Metal</li>
              <li>Pop</li>
              <li>Reggae</li>
              <li>Rock</li>
            </ul>
            <p>
              Orginally, each sample is in a ".au" format, the format used with the
              software "Audacity" (
              <a href='https://www.audacityteam.org/'>
                https://www.audacityteam.org/
              </a>
              ), which is a free software used to treat sound.
            </p>
            <p>
              However, for production purposes, we've decide to transform
              these files into ".mp3" files, a more widespread format. This will
              enable us to perform sample evaluation using any song.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <SubTitle>Research questions</SubTitle>
            <p>
              <strong>
                How can we predict music genre from an mp3 file using Python ?
              </strong>
            </p>
            <p>
              To answer this question and further interrogate ourselves in our
              approach, we can ask ourselves:
            </p>
            <ul>
              <li>Which are the most important features to predict a genre?</li>
              <li>
                Looking at the features, what differentiates each music genre (e.g.
                classical music from disco and disco from pop)?
              </li>
              <li>
                Are there groups of genres that look alike features wise? Can that
                turn out to be an issue in prediction?
              </li>
              <li>Is the music’s spectrogram useful to use to make predictions?</li>
              <li>
                How will dataset volumetry affect model runtime and feature CSV
                creation?
              </li>
              <li>How do the scales of the features compare with each other? </li>
              <li>Are there any correlations between features?</li>
              <li>
                For the human ear, rock and metal are similar genres compared to
                reggae, is this also true when looking at the features?{' '}
              </li>
              <li>
                Which ML algorithms will prove to be most efficient in predicting
                music genres?
              </li>
              <li>
                Can we make accurate predictions using any mp3 outside of the dataset
                (sample evaluation)?
              </li>
              <li>Is data normalisation required?</li>
              <li>
                Once the model is operational, is it important to extract x seconds
                or just run the whole music?
              </li>
              <li>
                Once the model is operational, will audio quality be an issue to
                extract features of tracks we wish to identify?{' '}
              </li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <SubTitle>Hypotheses</SubTitle>
            <p>
              Our approach will be guided by these four hypotheses, which we will
              confront throughout this work with our results:
            </p>
            <ul>
              <li>
                Numeric features extracted from audio samples can be used for
                prediction.
              </li>
              <li>
                The prediction we are looking for is one relative to classification,
                as our data consists of 10 distinct genres.
              </li>
              <li>
                Since we require classification: Support Vector Machines, K-Nearest
                Neighbors and Neural Networks will be tested.
              </li>
              <li>
                Audio Spectograms have proven to be relevant in audio treatment, we
                will explore this as well.
              </li>
            </ul>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <SubTitle>Workflow</SubTitle>
            <p>
              The data consists solely of the audio samples. The process we now have
              to follow is as presented in the graphic below:
            </p>
            <ul>
              <li>Extracting features from the mp3 file</li>
              <li>
                Scaling these features, and encoding them when necessary in order to
                have only numeric features
              </li>
              <li>Plugging these features in our classifying model</li>
              <li>Obtaining the predicted genre</li>
            </ul>

            <img
              src={OverallWorkflowImage}
              class='img-fluid'
              alt='overall_workflow'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <SubTitle>Feature Extraction</SubTitle>
            <p>In order to extract numeric features from our data, we will use a Python library called Librosa.  Librosa "is a python package for music and audio analysis. It provides the building blocks necessary to create music information retrieval systems." (<a href="https://librosa.org/doc/latest/index.html">https://librosa.org/doc/latest/index.html</a>)</p>
            <p>Using this library, we will extract a total of 66 features for each audio sample. These features will be inserted inside a CSV file alongside filename and genre label, thus leading to a CSV file of 1000 lines for 68 columns. Among the features we will extract are:</p>
            <ul>
              <li>Mel-frequency cepstral coefficients (MFCCs)</li>
              <li>Spectral contrast</li>
              <li>Spectal flatness</li>
              <li>Spectral centroid</li>
              <li>Rolloff frequency</li>
              <li>Chroma variant “Chroma Energy Normalized” or CENS</li>
              <li>Tonal centroid features or tonnetz</li>
              <li>Zero crossing rate</li>
            </ul>
            <img
              src={FeatureExtractionImage}
              class='img-fluid'
              alt='feature_extaction_csv_v2'
            />
          </div>
          </div>
          <div className='row'>
          <div className='col'>
            <SubTitle>Production</SubTitle>
            <p>After training multiple models and trying different approches (like using a Convolutional Neural Network on the track's spectrogram), we found that the best model was a Neural Network built with Tensorflow and Keras.</p>
            <p>For production we've built a React.js web app consuming a Python3 REST API. The REST API is built using Fast API and serves the Tensorflow model and librosa to extract features from uploaded MP3 files. The production environment uses Docker and an on-premise Kubernetes cluster.</p>
            <p>In terms of data usage the uploaded files are never stored. The application is a 100% stateless (no database) and doesn't track users. The only data that is stored in the server logs are the filename, the processed features fed into the model and the predicted class.</p>
          </div>


        </div>
      </div>
    </div>
  );
}
