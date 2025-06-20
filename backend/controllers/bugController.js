const db = require('../db/db');

// Create a new bug
exports.createBug = (req, res) => {
  const { title, description, severity, status } = req.body;

  const query = `
    INSERT INTO bugs (title, description, severity, status)
    VALUES (?, ?, ?, ?)
  `;

  db.run(query, [title, description, severity || 'Low', status || 'Open'], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Bug created', bugId: this.lastID });
  });
};

// Get all bugs
exports.getAllBugs = (req, res) => {
  db.all('SELECT * FROM bugs', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(rows);
  });
};

// Get bug by ID
exports.getBugById = (req, res) => {
  const { id } = req.params;

  db.get('SELECT * FROM bugs WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ message: 'Bug not found' });
    }
    res.status(200).json(row);
  });
};

// Update a bug
exports.updateBug = (req, res) => {
  const { id } = req.params;
  const { title, description, severity, status } = req.body;

  const query = `
    UPDATE bugs
    SET title = ?, description = ?, severity = ?, status = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `;

  db.run(query, [title, description, severity, status, id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Bug not found' });
    }
    res.status(200).json({ message: 'Bug updated' });
  });
};

// Delete a bug
exports.deleteBug = (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM bugs WHERE id = ?', [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Bug not found' });
    }
    res.status(200).json({ message: 'Bug deleted' });
  });
};
