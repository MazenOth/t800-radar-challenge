import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`T-800 Radar system online at http://localhost:${PORT}`);
});