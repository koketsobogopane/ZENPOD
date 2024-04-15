import styled from '@emotion/styled';
import { Card, Typography, Button, IconButton } from '@mui/material';
import { useEffect, useRef, useState, Fragment } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Pause from '@mui/icons-material/Pause';
import InfoIcon from '@mui/icons-material/Info';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Star from '@mui/icons-material/Star';
import Loading from '../Loading/Loading';
import Slider from '@mui/material/Slider';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import supabase from '../../config/supabaseClient';
import ShowBanner from '../ui/showBanner/ShowBanner';
import ShowContent from '../ui/showContent/ShowContent'

const Show = () => {
  const { showId } = useParams();
  const [showData, setShowData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          ` https://podcast-api.netlify.app/id/${showId}`
        );
        const data = await response.json();
        setShowData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [showId]);

  if (showData === null) return <Loading />;
  return (
    <Fragment>
      <ShowBanner image={showData.image} title={showData.title} description = {showData.description} seasons = {showData.seasons} />
      <ShowContent seasons = {showData.seasons}/>
    </Fragment>
  );
};

export default Show;
